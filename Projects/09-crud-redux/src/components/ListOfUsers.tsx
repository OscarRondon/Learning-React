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

import { useUserAction } from "../hooks/useUserAction";
import { DeleteIcon, EditIcon } from "./IconsSVG";

export function ListOfUsers() {
	const { users, removeUser } = useUserAction();

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
								<button type="button" onClick={() => removeUser(item.id)}>
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
