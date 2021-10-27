import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { login} from "../../Axios/login";
import { loginAction} from "../Actions/index"; 
import { loginSucceeded, loginRequested }  from '../Actions/login-action';
import { union } from "ts-action";
import { useHistory } from "react-router";




const actionType = union(loginRequested);
function* loginSaga(action:typeof actionType.actions) {
    //const history=useHistory()

    try {
      
        const payload = action.payload;
        const history=payload.history;
        const res : AxiosResponse= yield call(login,payload.usermail,payload.password);
       // console.log(res.data.GetUserKeyResult)
        if(res.data.GetUserKeyResult!="Wrong password")
        {
            localStorage.setItem("userKey", JSON.stringify(res.data.GetUserKeyResult));
            history.goBack();
        }else{
            alert("invalid data")
           window.location.reload();
        }
        yield put(loginSucceeded(res.data.GetUserKeyResult));
    } catch (e) {
        //yield put(getMoviesFailed(e));
        console.log(e)
        throw new Error("Page Not Found 404");
    } 
}

export function* watchLoginSaga() {
    yield takeLatest(loginAction.requested, loginSaga);
}
