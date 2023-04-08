import {
	Badge,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";

import { DeleteIcon, EditIcon } from "./IconsSVG";

const users: {
	id: string;
	name: string;
	email: string;
	github: string;
}[] = [
	{
		id: "1FFxpE2854356-EF11",
		name: "Peter Doe",
		email: "Peter.Doe@gmail.com",
		github: "oscarrondon",
	},
	{
		id: "2FFxpE2854356-EF12",
		name: "Lena Whitehouse",
		email: "Lena.Whitehouse@gmail.com",
		github: "Lena.Whitehouse",
	},
	{
		id: "3FFxpE2854356-EF13",
		name: "Phil Less",
		email: "Phil.Less@gmail.com",
		github: "leo",
	},
	{
		id: "4FFxpE2854356-EF14",
		name: "John Camper",
		email: "John.Camper@gmail.com",
		github: "John.Camper",
	},
];

export function ListOfUsers() {
	return (
		<Card>
			<Title>
				Usuarios
				<Badge style={{ marginLeft: "10px" }}>{users.length}</Badge>
			</Title>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell> Id </TableHeaderCell>
						<TableHeaderCell> Name </TableHeaderCell>
						<TableHeaderCell> Email </TableHeaderCell>
						<TableHeaderCell> Actions </TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.map((item) => (
						<TableRow key={item.name}>
							<TableCell>{item.id}</TableCell>
							<TableCell
								style={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<img
									style={{
										width: "32px",
										height: "32px",
										borderRadius: "50%",
										border: "solid black 1px",
										marginRight: "10px",
									}}
									src={`https://unavatar.io/github/${item.github}`}
									alt="Avatar"
								/>
								{item.name}
							</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>
								<button type="button">
									<EditIcon />
								</button>
								<button type="button">
									<DeleteIcon />
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
