function AppointmentsForm() {
  const id = localStorage.getItem('mansionId');

  return (
    <>
      <h2>Create an appointment</h2>
      <fieldset>
        <p>{id}</p>
      </fieldset>
    </>
  );
}

export default AppointmentsForm;
