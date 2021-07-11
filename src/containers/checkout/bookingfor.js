import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { InputNumber } from "antd";

const BookingFor = () => {
	const [state, setState] = React.useState({
		checkedA: true,
	});

	const handleChange = event => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	const onFinish = values => {
		console.log("Received values of form:", values);
	};

	return (
		<Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
			<Form.List name="users">
				{(fields, { add, remove }) => (
					<>
						{fields.map(({ key, name, myself, age, fieldKey, ...restField }) => (
							<Space
								key={key}
								style={{ display: "flex", marginBottom: 8 }}
								align="baseline"
							>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.checkedA}
											onChange={handleChange}
											name="checkedA"
											key={key}
										/>
									}
									// label="Secondary"
								/>
								<Form.Item
									{...restField}
									name={[name, "name"]}
									fieldKey={[fieldKey, "name"]}
									rules={[{ required: true, message: "Missing name" }]}
								>
									<Input placeholder="Name" />
								</Form.Item>
								<Form.Item
									{...restField}
									age={[age, "age"]}
									fieldKey={[fieldKey, "age"]}
									rules={[{ required: true, message: "Missing age" }]}
								>
									<InputNumber number placeholder="Age" />
								</Form.Item>
								<MinusCircleOutlined onClick={() => remove(name)} />
							</Space>
						))}
						<Form.Item>
							<Button
								// type="dashed"
								onClick={() => add()}
								// block
								icon={<PlusOutlined />}
							>
								Add another participant
							</Button>
						</Form.Item>
					</>
				)}
			</Form.List>
			{/* <Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item> */}
		</Form>
	);
};

export default BookingFor;
