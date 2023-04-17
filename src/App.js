import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { TablePage, formatPrice } from '@terminus/bricks';

function App() {
  const [count, setCount] = useState(0);

	const columns = [
		{
			title: '年计划类型',
			dataIndex: 'planType',
			align: 'center',
		},
		{
			title: '年计划编号',
			dataIndex: 'planCode',
			align: 'center',
		},
		{
			title: '托运商名称',
			dataIndex: 'shipperName',
			align: 'center',
		},
		{
			title: '订单编号',
			dataIndex: 'orderId',
			align: 'center',
		},
		{
			title: '场站',
			dataIndex: 'stationName',
			align: 'center',
		},
		{
			title: '订单量',
			dataIndex: 'orderTotal',
			align: 'center',
		},
		{
			title: '订单时长',
			dataIndex: 'orderDuration',
			align: 'center',
		},

	]


  return (
		<TablePage columns={columns}>
      {/* <div className="App">
        <div>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Rspack + React { formatPrice(1000000) }</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Rspack and React logos to learn more
        </p>
      </div> */}
    </TablePage>
  );
}

export default App;
