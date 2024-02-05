// FC = functional component

const root = ReactDOM.createRoot(document.getElementById("root"));

function Cohort34() {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Cohort 34.2</h1>
      <h1 className='text-center'>Cohort 34.2</h1>
    </>
  );
}

root.render(
  <>
    <Cohort34 />
    <Cohort34 />
    <Cohort34 />
  </>
);
