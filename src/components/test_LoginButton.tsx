import { fireEvent, render, screen } from "@testing-library/react";
import { LoginButton } from "./LoginButton";
import { User } from "../data/userInterface";

describe("LoginButton tests", () => {
  it("calls signInWithGooglePopup when clicked", async () => {
    const signInWithGooglePopupMock = jest.fn();
    jest.mock("../path/to/signInWithGooglePopup", () => ({
      signInWithGooglePopup: signInWithGooglePopupMock,
    }));

    render(
      <LoginButton
        setLoginUser={function (setLoginUser: User): void {
          throw new Error("Function not implemented.");
        }}
        setLogin={function (newLogin: boolean): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const button = screen.getByText("Login with Google");
    fireEvent.click(button);

    expect(signInWithGooglePopupMock).toHaveBeenCalled();
  });
});
