import Stopwatch from './Stopwatch.js'

class StopwatchWithResults extends Stopwatch {
  
  private results : string[] = [];

  constructor(element : HTMLDivElement) {
    super(element)
    this.prepareElements(element)
    this.prepareActions()
  }

  private prepareElements(element : HTMLDivElement) : void {
    this.dom.resultsList = element.querySelector('.stopwatch__results') as HTMLDivElement
    this.dom.addToListBtn = element.querySelector('.stopwatch__add-to-list-btn') as HTMLButtonElement
    this.dom.resetListBtn = element.querySelector('.stopwatch__reset-list-btn') as HTMLButtonElement
  }

  private prepareActions = () : void => {
        this.dom.addToListBtn.addEventListener("click", this.addToList);
        this.dom.resetListBtn.addEventListener("click", this.resetList);
  }

  private renderList() : void {
    this.dom.resultsList.innerHTML = ''
    this.dom.resultsList.innerHTML = this.results.map(result => `<li>${result}</li>`).join('')
    /*
    Funkcja ta powinna czyścić zawartość this.dom.resultsList, a następnie renderować w niej nowe elementy li
    na podstawie zawartości tablicy this.results. Każdy jej element powinien być renderowany bez żadnych zmian.

    np. <li>00:12:00</li>
    */
  }

  private addToList = () : void => {
    this.results.push(this.formatTime(this.currentTime));
    this.renderList();
    /*
    Funkcja ta powinna pobierać aktualny czas z this.currentTime, formatować go i w takiej postaci zapisywać do tablicy this.results.
    Następnie powinna renderować aktualną listę na stronie (this.renderList).
    */
  }

  private resetList = () : void => {
    this.dom.resultsList.innerHTML = '';
    this.results = [];
  }

}

export default StopwatchWithResults