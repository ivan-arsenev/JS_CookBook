// function Log(constructor: Function) {
//     console.log(constructor);
// }

// function Log2(target: any, propName: string | Symbol) {
//     console.log(target);
//     console.log(propName);
// }
// function Log3(
//     target: any,
//     propName: string | Symbol,
//     descriptors: PropertyDescriptor
// ) {
//     console.log(target);
//     console.log(propName);
//     console.log(descriptors);
// }

// @Log
// class Component {
//     @Log2
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }

//     logName(): void {
//         console.log(`Component name : ${this.name}`);
//     }
// }

interface ComponentDecorator {
    selector: string;
    template: string;
}
function Component(config: ComponentDecorator) {
    return function<T extends { new (...args: any[]): object }>(
        Constructor: T
    ) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args);

                const el = document.querySelector(config.selector)!;
                el.innerHTML = config.template;
            }
        };
    };
}

@Component({
    selector: '#card',
    template: `
        <div class="card">
            <div class="card-content"></div>
        </div>
    `,
})
class CardComponent {
    constructor(public name: string) {}
    logName(): void {
        console.log(`Component name : ${this.name}`);
    }
}

const card = new CardComponent('My Card Component');
