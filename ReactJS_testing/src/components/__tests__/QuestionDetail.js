import { mapStateToProps } from "../QuestionDetail";
describe("The question detail component", () => {
  describe("The container element", () => {
    describe("mapstatetoprops", () => {
      it("should map the state to props correctly", () => {
        const appState = {
          question_id: 42,
          body: "Space "
        };
        const ownProps = {};
        const componentState = mapStateToProps(appState, ownProps);
      });
    });
  });
});
