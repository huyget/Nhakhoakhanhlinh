import EventHandler from "events";

const _emitter = new EventHandler();
_emitter.setMaxListeners(0);//unlimit listener- khong gioi han nguoi dung

export const emitter = _emitter;
