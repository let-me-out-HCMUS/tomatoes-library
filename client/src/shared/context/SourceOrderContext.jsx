import {createContext, useEffect, useState} from "react";
import {getSources} from "../../api/source";

export const SourceOrderContext = createContext();

const SOURCES_ORDER = 'say-gex-sources-order'

export default function ({children}) {
	const [sourceOrder, setSourceOrder] = useState([]); // [{}]

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getSources()
				const fromServer = response.data;
				const fromLocal = JSON.parse(localStorage.getItem(SOURCES_ORDER));

				if (fromServer.length !== fromLocal?.length) {
					localStorage.setItem(SOURCES_ORDER, JSON.stringify(fromLocal));
					setSourceOrder(fromServer)
				} else {
					setSourceOrder(fromLocal);
				}
			} catch (error) {
				console.log(error);
			}
		}

		fetchData().then(r => console.log(r))
	}, [])

	const getSourceOrder = () => {
		return sourceOrder;
	};

	const moveSourceUp = (index) => {
		if (index === 0) return; // First source can't move up

		const newSourceOrder = [...sourceOrder];
		[newSourceOrder[index - 1], newSourceOrder[index]] = [newSourceOrder[index], newSourceOrder[index - 1]];
		setSourceOrder(newSourceOrder);
	};

	const moveSourceDown = (index) => {
		if (index === sourceOrder.length - 1) return; // Last source can't move down

		const newSourceOrder = [...sourceOrder];
		[newSourceOrder[index], newSourceOrder[index + 1]] = [newSourceOrder[index + 1], newSourceOrder[index]];
		setSourceOrder(newSourceOrder);
	};

	const submit = () => {
		localStorage.setItem(SOURCES_ORDER, JSON.stringify(sourceOrder))
		window.location.reload()
	}

	const value = {
		getSourceOrder,
		moveSourceUp,
		moveSourceDown,
		submit
	};

	return <SourceOrderContext.Provider value={value}>{children}</SourceOrderContext.Provider>;
};