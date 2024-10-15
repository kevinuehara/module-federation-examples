import { Suspense, useState } from "react";
import "./App.css";
import { preloadRemote } from "@module-federation/enhanced/runtime";
preloadRemote([
  {
    nameOrAlias: "rspack_manifest_provider",
    resourceCategory: "all",
  },
]);

const App = () => {
  const [manifestTime, setManifestTime] = useState(0);
  const [pureEntryTime, setPureEntryTime] = useState(0);
  const [manifestRemote, setManifestRemote] = useState(null);
  const [jsEntryRemote, setPureEntryRemote] = useState(null);

  const loadManifestProvider = () => {
    if (manifestRemote === null) {
      const manifestRemoteStartTime = Date.now();
      import("rspack_manifest_provider/Lodash").then((m) => {
        const manifestRemoteEndTime = Date.now();
        console.log("loadManifestProvider");
        setManifestTime(manifestRemoteEndTime - manifestRemoteStartTime);
        // @ts-ignore
        setManifestRemote({ default: m.Lodash });
      });
    }
  };

  const loadJSEntryProvider = () => {
    if (jsEntryRemote === null) {
      const pureEntryRemoteStartTime = Date.now();
      import("rspack_js_entry_provider/Lodash").then((m) => {
        const pureEntryRemoteEndTime = Date.now();
        setPureEntryTime(pureEntryRemoteEndTime - pureEntryRemoteStartTime);
        // @ts-ignore
        setPureEntryRemote({ default: m.Lodash });
      });
    }
  };

  // @ts-ignore
  const ManifestRemote = manifestRemote ? manifestRemote.default : null;
  // @ts-ignore
  const JSEntryRemote = jsEntryRemote ? jsEntryRemote.default : null;

  return (
    <div>
      <h2 style={{ margin: "20px" }}>
        MF runtime can preload assets with <em>Manifest Provider</em>{" "}
      </h2>

      <table border={1} cellPadding={5} style={{ margin: "20px" }}>
        <thead>
          <tr>
            <td></td>
            <td>Manifest Provider</td>
            <td>JS Entry Provider</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>click button to load remote component</td>
            <td>
              <button
                id="loadManifestProvider"
                onClick={loadManifestProvider}
                style={{
                  backgroundColor: "#075985",
                  border: "none",
                  borderRadius: "4px",
                  padding: "12px",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Load Manifest Provider
              </button>
            </td>
            <td>
              <button
                id="loadJSEntryProvider"
                onClick={loadJSEntryProvider}
                style={{
                  backgroundColor: "#075985",
                  border: "none",
                  borderRadius: "4px",
                  padding: "12px",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Load JS Entry Provider
              </button>
            </td>
          </tr>
          <tr>
            <td>Lodash API's</td>
            <td>
              <Suspense fallback="loading ManifestRemote">
                {ManifestRemote && <ManifestRemote />}
              </Suspense>
            </td>
            <td>
              <Suspense fallback="loading JSEntryRemote">
                {JSEntryRemote && <JSEntryRemote />}
              </Suspense>
            </td>
          </tr>
          <tr>
            <td>Time (ms)</td>
            <td>
              <div id="manifest-time" style={{ color: "green" }}>
                {manifestTime}
              </div>
            </td>
            <td>
              <div id="js-entry-time" style={{ color: "red" }}>
                {pureEntryTime}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
