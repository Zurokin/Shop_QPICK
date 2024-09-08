import { configureStore } from "@reduxjs/toolkit";
import reducers from "./slices";

/*Создание хранилища (store) с помощью вызова функции configureStore и передачи объекта с редюсерами*/
const store = configureStore({
  reducer: {
    ...reducers,
  },
});
/*Экспорт созданного хранилища*/
export default store;
/*Определение типа RootState, который представляет тип состояния хранилища*/
export type RootState = ReturnType<typeof store.getState>;
/*Определение типа AppDispatch, который представляет тип функции диспетчера для хранилища*/
export type AppDispatch = typeof store.dispatch;
/*Данный код настраивает и экспортирует хранилище Redux с набором редюсеров, а также определяет типы для состояния хранилища и функции диспетчера приложения.*/
