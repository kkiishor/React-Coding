import { authReducer, userInitialState } from "reducer";

describe("test auth reducers", () => {
  test("should user login", () => {
    const state = authReducer(userInitialState, {
      type: "loggedIn",
      payload: {
        firstName: "Kishor",
        lastName: "Dukre",
        email: "KishorDukre@gmail.com",
        _id: 1,
      },
      token:"1234"
    });
    const expectedState = {
      firstName: "Kishor",
      lastName: "Dukre",
      email: "KishorDukre@gmail.com",
      id: 1,
      msg:"",
      isAuthTokenPresent:true,
      authToken:"1234",
    };

    expect(state).toEqual(expectedState);
  });
  test("Should user signup",()=>{
      const state = authReducer(userInitialState,{
          type:"signup",
          payload:{
            firstName: "Kishor",
            lastName: "Dukre",
            email: "KishorDukre@gmail.com",
            _id: 1, 
          },
          token:"1234"
      });
      const expectedState = {...userInitialState,
        firstName: "Kishor",
        lastName: "Dukre",
        email: "KishorDukre@gmail.com",
        id: 1, 
        isAuthTokenPresent:true,
        authToken:"1234"
    }
    expect(state).toEqual(expectedState)
  })
});
