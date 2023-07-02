import './Sidebar.css';

function Sidebar() {
  return (
    <div>
      <button
        className="btn my-custom-button"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        <img src="/src/assets/Openlateralbar.png" alt="Open Sidebar" />
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex={-1}
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
        style={{ marginTop: '100px' }}
      >
        <div className="offcanvas-body">
          <table>
            <tbody>
              <tr>
                <td className="pagename">
                  <a className="custom-word2" href="#">
                    Identity management and access management
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pagename">
                  <a className="custom-word2" href="#">
                    Operators performance
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pagename">
                  <a className="custom-word2" href="#">
                    Any other module
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          className="btn my-custom-button2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
        >
          <img src="/src/assets/Closelateralbar.png" alt="Close Sidebar" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
