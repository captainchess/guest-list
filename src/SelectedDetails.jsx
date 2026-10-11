export default function SelectedDetails({ job, bio }) {
  if (!job) {
    return (
      <>
        <p>Select a guest to see more details</p>
      </>
    );
  }

  return (
    <>
      <div>
        <h4>Job</h4>
        <p>{job}</p>
      </div>
      <div>
        <h4>Bio</h4>
        <p>{bio}</p>
      </div>
    </>
  );
}
