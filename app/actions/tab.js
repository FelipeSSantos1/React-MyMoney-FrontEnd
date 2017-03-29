/**
 * Seleciona a Tab clicada
 * @param  {string} tabId id da Tab
 * @return {object} type and payload of the redux
 */
export function selectTab(tabId){
	return{
		type: 'TAB_SELECTED',
		payload: tabId
	}
}
/**
 * Mostra as Tabs passadas por parâmetro
 * @param  {...string} tabIds conjunto de Ids de tabs (o operador spread ... junta os parâmetros em um array)
 * @return {object} type and payload of the redux
 */
export function showTabs(...tabIds){
	const tabsToShow = {}
	tabIds.forEach(id => tabsToShow[id] = true ) // ex result willBe: tabsToShow = {TabList: true, TabCreate: true}

	return{
		type: 'TAB_SHOWED',
		payload: tabsToShow
	}
}
