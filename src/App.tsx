import AuthService from "@Services/auth.service";
import IUser from "@Types/user.type";
import { Component } from "react";

import "@App/App.css";
import Navbar from "@Common/navbar";
import GlobalProviderWrapper from "@Provider/global_context.provider";
import AppRoutes from "@Routes/app.route";

type Props = object;

type State = {
  currentUser: IUser | undefined;
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({ currentUser: user });
    }
  }

  render() {
    const { currentUser } = this.state;

    return (
      <GlobalProviderWrapper>
        <div>
          <Navbar currentUser={currentUser} />
          <div className="container mx-auto mt-6">
            <AppRoutes />
          </div>
        </div>
      </GlobalProviderWrapper>
    );
  }
}

export default App;
