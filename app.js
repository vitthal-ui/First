/* 
<div class="parent">
    <div class="c">
        <h1>Hello</h1>
    </div>
</div>
*/
const heading = React.createElement('div', { class: 'parent' },
    React.createElement('div', { class: 'child' },[
        React.createElement('h1', {}, 'I am H1 tag'),
        React.createElement('h2', {}, 'I am sub h2 tag'),
    ]));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);