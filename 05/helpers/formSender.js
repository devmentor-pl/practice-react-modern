import { init, send } from 'emailjs-com';
import account from './account';
import ACTIONS from './actions';
import fields from './formFields';
import { convertArrToObj } from './helpersFunctions';

function prepareDataToSend(data) {
    const dataArr = fields.map((field) => {
        const { name } = field;
        const { value } = data[name];
        if (value.length !== 0) {
            return {
                [name]: value,
            };
        }
        return null;
    });
    return convertArrToObj(dataArr);
}

const info = {
    succes: 'Message sent!',
    failed: 'Message not sent.',
};

export default function sendMessage(data, dispatch, setInfo) {
    init(account.userID);
    const msgData = prepareDataToSend(data);
    send(account.serviceID, account.templateID, msgData)
        .then((resp) => {
            if (resp.status === 200) {
                return setInfo(info.succes);
            }
            return Promise.reject(resp);
        })
        .then(() => dispatch({ type: ACTIONS.CLEAR_FORM }))
        .catch((err) => {
            const msg = `${info.failed}. (${err.text})`;
            return setInfo(msg);
        });
}
