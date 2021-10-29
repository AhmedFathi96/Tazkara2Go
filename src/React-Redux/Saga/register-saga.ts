import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { register} from "../../Axios/register";
import { registerAction} from "../Actions/index"; 
import { registerSucceeded, registerRequested }  from '../Actions/register-action';
import { union } from "ts-action";




const actionType = union(registerRequested);
function* registerSaga(action:typeof actionType.actions) {

    try {
      
        const payload = action.payload;
        //console.log(payload)
        const res : AxiosResponse= yield call(register,payload.UserEmail,payload.UserName,payload.UserPhone,payload.UserPassword);
        // console.log(res.data.AddUserResult)
        yield put(registerSucceeded(res.data.AddUserResult));
    } catch (e) {
        //yield put(getMoviesFailed(e));
        //console.log(e)
        throw new Error("Page Not Found 404");
    } 
}

export function* watchregisterSaga() {
    yield takeLatest(registerAction.requested, registerSaga);
}
