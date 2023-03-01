const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    user: null,
  },
});

export default store;
