import React from "react";
import firebase from "firebase";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import LogIn from "./LogIn";
import base, { firebaseApp } from "../base";

class Inventroy extends React.Component {
  state = {
    uid: null,
    owner: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.authHandler({user});
      }
    })
  }

  authHandler = async authData => {
    const { storeId } = this.props;
    const store = await base.fetch(storeId, { context: this });

    if (!store.owner) {
      await base.post(`${storeId}/owner`, {
        data: authData.user.uid
      });
    }
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();

    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null })
  }

  render() {

    const logout = <button onClick={this.logout}>Log Out!</button>

    const {
      addFish,
      loadSampleFishes,
      fishes,
      updateFish,
      deleteFish
    } = this.props;

    if (!this.state.uid) {
      return <LogIn authenticate={this.authenticate} />;
    }

    if(this.state.uid !== this.state.owner) {
      return <div><div>Sorry, you are not owner!</div>
        {logout} </div>
    }

    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
        {Object.keys(fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={fishes[key]}
            updateFish={updateFish}
            deleteFish={deleteFish}
          />
        ))}
        <AddFishForm addFish={addFish} />
        <button onClick={loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventroy;
