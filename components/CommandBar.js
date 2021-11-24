import * as React from "react";
import { useRouter } from "next/router";
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useDeepMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
} from "kbar";

const searchStyle = {
  padding: "12px 16px",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box"["boxSizing"],
  outline: "none",
  border: "none",
  background: "var(--background)",
  color: "var(--foreground)",
};

const animatorStyle = {
  maxWidth: "600px",
  width: "100%",
  background: "var(--background)",
  color: "var(--foreground)",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "var(--shadow)",
};

const groupNameStyle = {
  padding: "8px 16px 10px",
  fontSize: "10px",
  textTransform: "uppercase",
  opacity: 0.5,
};

function RenderResults() {
  const { results, rootActionId } = useDeepMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId}
          />
        )
      }
    />
  );
}

const ResultItem = React.forwardRef(
  ({ action, active, currentRootActionId }) => {
    const ancestors = React.useMemo(() => {
      return (function collect(action, ancestors = []) {
        if (action.parent && action.parent.id !== currentRootActionId) {
          ancestors.push(action.parent);
          if (action.parent.parent) {
            collect(action.parent.parent, ancestors);
          }
        }
        return ancestors;
      })(action);
    }, [action, currentRootActionId]);

    return (
      <div
        style={{
          padding: "8px 16px",
          background: active ? "var(--a1)" : "transparent",
          borderLeft: `2px solid ${
            active ? "var(--sideBorder)" : "transparent"
          }`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            fontSize: 14,
          }}
        >
          {action.icon && action.icon}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <React.Fragment key={ancestor.id}>
                    <span
                      style={{
                        opacity: 0.5,
                        marginRight: 8,
                      }}
                    >
                      {ancestor.name}
                    </span>
                    <span
                      style={{
                        marginRight: 8,
                      }}
                    >
                      &rsaquo;
                    </span>
                  </React.Fragment>
                ))}
              <span>{action.name}</span>
            </div>
            {action.subtitle && (
              <span className="pb-1" style={{ fontSize: 12 }}>
                {action.subtitle}
              </span>
            )}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div
            aria-hidden
            style={{ display: "grid", gridAutoFlow: "column", gap: "4px" }}
          >
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                style={{
                  padding: "4px 6px",
                  background: "rgba(0 0 0 / .1)",
                  borderRadius: "4px",
                  fontSize: 14,
                }}
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
);

export default function CommandBar(props) {
  const router = useRouter();

  const actions = [
    {
      id: "home",
      name: "Home",
      shortcut: ["h"],
      keywords: "go-home",
      section: "Navigation",
      perform: () => router.push("/"),
      subtitle: "Landing page",
    },
    {
      id: "about",
      name: "About me",
      shortcut: ["a"],
      keywords: "go-about",
      section: "Navigation",
      perform: () => router.push("/pages/about"),
      subtitle: "Learn more about me",
    },
    {
      id: "blogs",
      name: "Blogs",
      shortcut: ["b"],
      keywords: "go-blogs",
      section: "Navigation",
      perform: () => router.push("/posts"),
      subtitle: "Find my latest writings",
    },
    {
      id: "courses",
      name: "Courses",
      shortcut: ["c"],
      keywords: "go-courses",
      section: "Navigation",
      perform: () => router.push("/courses"),
      subtitle: "Check out my video courses",
    },
    {
      id: "github",
      name: "Github Stats",
      shortcut: ["g"],
      keywords: "go-github",
      section: "Metrics",
      perform: () => router.push("/pages/github"),
    },
    {
      id: "youtube",
      name: "Youtube Stats",
      shortcut: ["y"],
      keywords: "go-youtube",
      section: "Metrics",
      perform: () => router.push("/pages/youtube"),
    },
    {
      id: "twitterAction",
      name: "Twitter",
      shortcut: ["t"],
      keywords: "social contact dm",
      section: "Contact",
      perform: () => window.open("https://twitter.com/andre347_", "_blank"),
    },
    {
      id: "linkedinAction",
      name: "LinkedIn",
      shortcut: ["l"],
      keywords: "social contact dm",
      section: "Contact",
      perform: () =>
        window.open("https://www.linkedin.com/in/andreelzedevries/", "_blank"),
    },
    {
      id: "githubAction",
      name: "Github",
      shortcut: ["g"],
      keywords: "social contact dm",
      section: "Contact",
      perform: () => window.open("https://github.com/andre347", "_blank"),
    },
    {
      id: "devAction",
      name: "dev.to",
      shortcut: ["dev"],
      keywords: "social contact dm",
      section: "Contact",
      perform: () => window.open("https://dev.to/andre347", "_blank"),
    },
    {
      id: "copy",
      name: "Copy URL",
      shortcut: ["u"],
      keywords: "copy-url",
      section: "General",
      perform: () => navigator.clipboard.writeText(window.location.href),
    },
    {
      id: "source",
      name: "View Github Source",
      shortcut: ["s"],
      keywords: "view-source",
      section: "General",
      perform: () =>
        window.open(
          "https://github.com/andre347/next-website-andredevriesdev",
          "_blank"
        ),
    },
    {
      id: "resume",
      name: "See Resume",
      shortcut: ["r"],
      keywords: "view-resume",
      section: "General",
      perform: () => router.push("/resume"),
    },
  ];

  return (
    <KBarProvider
      options={{
        callbacks: {
          onOpen: () => console.log("open"),
          onClose: () => console.log("close"),
          onQueryChange: (query) => console.log("changed", query),
          onSelectAction: (action) => console.log("executed", action),
        },
      }}
      actions={actions}
    >
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator style={animatorStyle}>
            <KBarSearch style={searchStyle} />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {props.children}
    </KBarProvider>
  );
}
