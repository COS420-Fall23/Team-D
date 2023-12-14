import { JobListing } from "../data/job_listing";
import { ListingView } from "../components/ListingView";
import { Header } from "../components/Header";
import { UserSingleton } from "../data/UserSingleton";
import { useState } from "react";

export function SavedJobsPage(): JSX.Element {
  const FireBaseUser = UserSingleton.getInstance();
  const [refresh, setRefresh] = useState(false);

  UserSingleton.addListener(refresh, setRefresh, "SavedJobsPage");

  return (
    <div>
      <Header></Header>
      {FireBaseUser.saved_jobs.length === 0 ? (
        <h1>No Saved Jobs</h1>
      ) : (
        FireBaseUser.saved_jobs.map((listing: JobListing) => (
          <ListingView
            listing={listing}
            isSaved={true}
            refresh={refresh}
            setRefresh={setRefresh}
          ></ListingView>
        ))
      )}
    </div>
  );
}
