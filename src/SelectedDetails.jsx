export default function SelectedDetails({ name, job, bio }) {
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
        <h4>Name</h4>
        <p>{name}</p>
      </div>
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
