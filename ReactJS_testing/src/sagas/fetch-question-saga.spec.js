import { handleFetchQuestion } from "./fetch-question-saga";
import fetch from "isomorphic-fetch";

describe("Fetch question saga", () => {
  beforeAll(() => {
    fetch.__setValue([{ question_id: 42 }]);
  });
  it("Should fetch the question ", async () => {
    const jen = handleFetchQuestion({ question_id: 42 });
    const { value } = await jen.next();
    expect(value).toEqual([{ question_id: 42 }]);
    expect(fetch).toHaveBeenCalledWith(`/api/questions/42`);
  });
});
