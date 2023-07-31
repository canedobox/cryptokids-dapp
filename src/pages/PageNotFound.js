import { Link } from "react-router-dom";
// Components
import Button from "../components/Button";

function PageNotFound() {
  // Return PageNotFound component.
  return (
    <main className="flex h-screen w-screen min-w-[theme(width.80)] flex-col items-center justify-center gap-4">
      <h1 className="text-8xl font-bold sm:text-9xl">Oops!</h1>
      <h2 className="text-xl font-bold sm:text-2xl">404 - PAGE NOT FOUND</h2>

      {/* Link to homepage */}
      <Link to="/" className="mt-4">
        <Button>GO TO HOMEPAGE</Button>
      </Link>
    </main>
  );
}

export default PageNotFound;
