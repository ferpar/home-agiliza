export default function Restock({ dict }) {
  return (
    <section>
      <div>
        <p>{dict["RESTOCK_IN_PROGRESS"]}</p>
      </div>
      <h3 style={{ marginTop: "2rem" }}>{dict["RESTOCK_MODULE_TITLE"]}</h3>
      <div>
        <p>
          {dict["RESTOCK_MODULE_INTRO"]}
        </p>
      </div>
      <h3 style={{ marginTop: "2rem" }}>{dict["CASHFLOW_MODULE_TITLE"]}</h3>
      <div>
        <p>
          {dict["CASHFLOW_MODULE_INTRO"]}
        </p>
      </div>
    </section>
  );
}
