import { useCallback, useEffect, useSyncExternalStore } from "react";
import { StyleStore } from "@ui5/webcomponents-react-base";

export function StyleProvider({ children, shadowRoot }) {
  // synchronize ui5-webcomponent-react (wcr) document adoptedStyleSheets with shadowRoot adoptedStyleSheets
  const syncAdoptedStyleSheet = useCallback(() => {
    // remove all wcr sheets
    shadowRoot.adoptedStyleSheets = shadowRoot.adoptedStyleSheets.filter(
      (s) => !s._ui5StyleId.startsWith("data-ui5wcr-component"),
    );
    // sync document.adoptedStyleSheets with shadowRoot.adoptedStyleSheets
    shadowRoot.adoptedStyleSheets.push(
      ...document.adoptedStyleSheets.filter((s) =>
        s._ui5StyleId.startsWith("data-ui5wcr-component"),
      ),
    );
  }, [shadowRoot]);

  // subscribe to wcr StyleStore changes
  const subscribeToStore = useCallback(
    (listener) => {
      StyleStore.subscribe(() => {
        listener();
        requestAnimationFrame(() => {
          syncAdoptedStyleSheet();
        });
      });
    },
    [syncAdoptedStyleSheet],
  );

  // use useSyncExternalStore to subscribe to external store (wcr StyleStore)
  useSyncExternalStore(
    subscribeToStore,
    StyleStore.getSnapshot,
    StyleStore.getServerSnapshot,
  );

  // initial sync
  useEffect(() => {
    syncAdoptedStyleSheet();
  }, []);

  return children;
}

StyleProvider.displayName = "StyleProvider";
