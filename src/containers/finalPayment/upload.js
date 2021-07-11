import { Upload, Button } from "antd";

const fileList = [
	{
		uid: -1,
		name: "xxx.png",
		status: "done",
		url: "https://camo.githubusercontent.com/0d870692cb23d884547d22054dfab40f4b68af499643acf4c95c067d2a83fa29/68747470733a2f2f696d672e616c6963646e2e636f6d2f7466732f544231514d782e4a7748714b31526a535a4a6e5858624e4c7058612d3236302d3236302e706e67",
		thumbUrl:
			"https://camo.githubusercontent.com/0d870692cb23d884547d22054dfab40f4b68af499643acf4c95c067d2a83fa29/68747470733a2f2f696d672e616c6963646e2e636f6d2f7466732f544231514d782e4a7748714b31526a535a4a6e5858624e4c7058612d3236302d3236302e706e67",
	},
	{
		uid: -2,
		name: "yyy.png",
		status: "done",
		url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
		thumbUrl: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
	},
];

const props = {
	action: "//jsonplaceholder.typicode.com/posts/",
	listType: "picture",
	defaultFileList: [...fileList],
};

const props2 = {
	action: "//jsonplaceholder.typicode.com/posts/",
	listType: "picture",
	defaultFileList: [...fileList],
	className: "upload-list-inline",
};

const Upload1 = () => {
	return (
		<div style={{ display: "flex" }}>
			<br />
			<br />
			<br />
			<Upload {...props2}>
				<Button>upload</Button>
			</Upload>
		</div>
	);
};

export default Upload1;
