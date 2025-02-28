
const Main = ({ sections }) => {
  return (
    <main className="mt-14 h-screen overflow-y-scroll snap-y snap-mandatory">
      {sections.map((SectionComponent, index) => (
        <section
          key={index}
          className="h-screen flex items-center justify-center snap-start transition-transform duration-700 ease-in-out"
        >
          <SectionComponent />
        </section>
      ))}
    </main>
  );
};

export default Main;
