import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to BIGBANG App</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/shorts/ntHRnXyVQSw"
            rel="noreferrer"
          >
            Awkward Moment
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/shorts/MynjFYGvx3M"
            rel="noreferrer"
          >
            Where to Study Abroad
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/shorts/MHeyx-lGZ9Y" rel="noreferrer">
            How to Fight Discrimination
          </a>
        </li>
      </ul>
    </div>
  );
}
