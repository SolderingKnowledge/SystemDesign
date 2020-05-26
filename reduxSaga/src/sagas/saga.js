// import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

function* incrementAsync() {
//   yield delay(3000);
  yield put({ type: "INCREMENT_ASYNC", value: 1 });
}

function* decrementAsync() {
    yield put({ type: "DECREMENT_ASYNC", value: 1 });
}


// listen for redux actions and intercept
export function* watchIncrement() {
  yield takeLatest("INCREMENT", incrementAsync);
}
export function* watchDecrement(){
    yield takeLatest("DECREMENT", decrementAsync)
}