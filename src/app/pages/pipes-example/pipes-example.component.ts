import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  text = 'Hello World!';
  date = new Date;
  pessoa = {
    nome: 'José',
    idade: '20',
    profissao: 'Programador'
  };
  nomes = ['Jose', 'Ana', 'Maria']

  constructor(private upperCasePipe: UpperCasePipe) { }

  ngOnInit(): void {
    this.text = this.upperCasePipe.transform(this.text)
  }

  mudaValor() {
    this.text = 'Novo texto';
  }

  add(text: string) {
    this.nomes.push(text);
  }

}
