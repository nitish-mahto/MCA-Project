import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/getData")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json.data,
        });
      });
  }
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="CardApi">
          <ul>
            <div>
              <table className="table table-hover" border="1">
                <thead>
                  <tr>
                    <th scope="col">Sr. No</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Username</th>
                    <th scope="col">Event</th>
                  </tr>
                </thead>
                {items.map((items, index) => (
                  <tbody>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{items.first_name}</td>
                      <td>{items.last_name}</td>
                      <td>{items.email}</td>
                      <td>{items.username}</td>
                      <td>
                        <button type="button" class="btn btn-success">
                          Update
                        </button>
                        <button type="button" class="btn btn-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </ul>
        </div>
      );
    }
  }
}

export default Users;
