"use client";
import { useSearchParams } from "next/navigation";

const SearchParamWala = () => {
  const searchparms = useSearchParams();
  return (
    <div className="mt-20">
      <h1>
        Our Blog is {searchparms.get("blog")} and utm source is{" "}
        {searchparms.get("utm_source")}
      </h1>
    </div>
  );
};

export default SearchParamWala;
/*Notes:
 # useSearchparams use krne ke liye url me yahi type ka url hona chaiye
 - http://localhost:3000/searchparamwala?blog=harry&utm_source=instagram/
*/