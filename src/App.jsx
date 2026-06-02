import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import DataTable from "./components/DataTable";
import Footer from "./components/Footer";
export default function App(){
const data=[{column:"customer_id",type:"int64",nulls:0,status:"Valid"},
{column:"salary",type:"float64",nulls:2,status:"Warning"},
{column:"city",type:"string",nulls:0,status:"Valid"},
{column:"email",type:"string",nulls:1,status:"Issue"}];
return <div className="container"><Navbar/>
<section className="hero"><h1>Data Quality Dashboard</h1><p>Monitor dataset health and quality metrics</p><button>Run Analysis</button></section>
<section className="stats">
<StatsCard title="Total Columns" value="12"/>
<StatsCard title="Null Values" value="3"/>
<StatsCard title="Duplicate Rows" value="1"/>
<StatsCard title="Dataset Health" value="92%"/>
</section>
<DataTable data={data}/>
<section className="duplicate-card"><h2>Duplicate Rows Found</h2><p>1 duplicate record detected</p></section>
<Footer/></div>}