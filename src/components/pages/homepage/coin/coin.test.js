import reducer from "../../../../redux/coins/coins.reducer";
import CoinsActionTypes from "../../../../redux/coins/coins.types";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({ data: [] });
  });

  it("should handle ADD_COIN", () => {
    expect(
      reducer([], {
        type: CoinsActionTypes.ADD_COIN,
        text: "Run the tests",
      })
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0,
      },
    ]);
  });
});
