"use client";
import React, { useState } from "react";

const page = () => {
	const [title, setitle] = useState("");
	const [desc, setdesc] = useState("");
	const [mainTask, setmainTask] = useState([]);

	let renderTask = (
		<li className="px-4 py-2 mb-2 border-2 border-black rounded-xl">
			No Task Available
		</li>
	);
	const submitFunction = (e) => {
		e.preventDefault();
		setmainTask([{ title, desc }, ...mainTask]);
		setitle("");
		setdesc("");
	};
	if (mainTask.length > 0) {
		renderTask = mainTask.map((task, id) => {
			return (
				<li
					key={id}
					className="flex justify-between px-4 py-2 mb-2 border-2 border-black rounded-xl">
					<div className="">
						<h5 className="text-black text-lg font-semibold">{task.title}</h5>
						<p className="text-slate-500 text-sm">{task.desc}</p>
					</div>
					<div>
						<button
							className="bg-red-500 text-white px-4 py-2 rounded font-bold "
							onClick={() => deleteTask()}>
							Delete
						</button>
					</div>
				</li>
			);
		});
	}
	const deleteTask = (id) => {
		let copyTask = [...mainTask];
		copyTask.splice(id, 1);
		setmainTask(copyTask);
	};
	return (
		<>
			<div className="text-center">
				<h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
					My TODO list
				</h1>
				<form onSubmit={submitFunction}>
					<input
						type="text"
						className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
						placeholder="Enter Task Here"
						value={title}
						onChange={(e) => setitle(e.target.value)}
					/>
					<input
						type="text"
						className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
						placeholder="Enter Description Here"
						value={desc}
						onChange={(e) => setdesc(e.target.value)}
					/>
					<button
						className="bg-black
    text-white px-4 py-2 text-2xl font-bold rounded m-5">
						Add Task
					</button>
				</form>
				<hr />
				<div className="p-8 text-left mr-auto ml-auto w-3/4">
					<ul>{renderTask}</ul>
				</div>
			</div>
		</>
	);
};

export default page;
