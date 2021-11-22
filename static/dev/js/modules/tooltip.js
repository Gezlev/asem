const AsemTooltip = (() => {
    const add = el => {
        let tooltip = document.createElement('div');
        tooltip.className = 'asem-tooltip';
        tooltip.innerHTML = el.getAttribute('alt');
        el.append(tooltip);
    }

    return {
        init: el => add(el)
    }
})();
export default AsemTooltip;
