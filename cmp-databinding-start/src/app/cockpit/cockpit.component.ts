import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  // EventEmitter is a Object which allow us to create custom event (cockpit)
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  //newServerName = "";
  newServerContent = "";

  constructor() {}

  ngOnInit(): void {}

  // Send the cockpit event outside the component
  onAddServer(name: HTMLInputElement) {
    console.log(name.value);
    this.serverCreated.emit({
      serverName: name.value,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint(name: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: name.value,
      serverContent: this.newServerContent,
    });
  }
}