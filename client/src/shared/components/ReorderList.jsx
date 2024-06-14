import React, {useContext} from 'react';
import {Button, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText} from '@mui/material';
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
import {SourceOrderContext} from '../context/SourceOrderContext.jsx';

const ReorderableList = () => {
	const {getSourceOrder, moveSourceUp, moveSourceDown, submit} = useContext(SourceOrderContext)
	const sources = getSourceOrder()
	return (
		<List>
			{sources.map((source, index) => (
				<ListItem key={source.name}
				          className="transition-transform duration-500 ease-in-out transform bg-gray-100 hover:bg-gray-200"
				>
					<ListItemText primary={source.name} className='mr-10 text-nowrap'/>
					<ListItemSecondaryAction>
						<IconButton
							edge="end"
							aria-label="move up"
							onClick={() => moveSourceUp(index)}
							disabled={index === 0}
						>
							<ArrowUpward/>
						</IconButton>
						<IconButton
							edge="end"
							aria-label="move down"
							onClick={() => moveSourceDown(index)}
							disabled={index === sources.length - 1}
						>
							<ArrowDownward/>
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			))}
			<Button variant='contained' onClick={submit} fullWidth>Xác nhận</Button>
		</List>
	);
};

export default ReorderableList;
