function Home() {
  return (
    <div data-testid="homepage">
      <h2>Luxury View</h2>
      <h3>The world&apos;s most luxurious market place</h3>

      <section>
        <h4>New & Trending</h4>
        <div>House 1</div>
        <div>House 2</div>
        <div>House 3</div>
        <div>House 4</div>
      </section>

      <section>
        <h4>Soon to come</h4>
        <div>Cars</div>
        <div>Yachts</div>
        <div>Jets</div>
      </section>

      <section>
        <h4>As seen in</h4>
        <img src="/assets/huffpost.svg" alt="huffpost-logo" />
        <img src="/assets/business-insider.svg" alt="bussiness-insider-logo" />
        <img src="/assets/bloomberg.svg" alt="bloomberg-logo" />
        <img src="/assets/cnbc.svg" alt="cnbc-logo" />
        <img src="/assets/bbc.svg" alt="bbc-logo" />
        <img src="/assets/financial-times.svg" alt="financial-times-logo" />
      </section>
    </div>
  );
}

export default Home;
