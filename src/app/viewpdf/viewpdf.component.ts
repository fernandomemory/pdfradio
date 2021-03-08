import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Laudo} from './laudo'
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-viewpdf',
  templateUrl: './viewpdf.component.html',
  styleUrls: ['./viewpdf.component.css']
})
export class ViewpdfComponent implements OnInit {
  docDefinition: any;
  information: object;
  title: object;
  measure: object;
  information2 = [];
  nome:any;
  constructor() { }
  

  ngOnInit(): void {
    this.nome = 'fernando';
  this.information =  [{indice: 1, descricao:"teste", medida:'1.12 m'},{indice: '', descricao:"teste", medida:'1.12 m'}];
  this.title = {texto:"teste"}
  this.measure = [{indice: 1, descricao:"teste", medida:'1.12 m'},{indice: 1, descricao:"teste", medida:'1.12 m'},
  {indice: 1, descricao:"teste", medida:'1.12 m'},{indice: 1, descricao:"teste", medida:'1.12 m'},
]
 
  }

  generatePdf(){
    Object.keys(this.information).forEach((name, index) => {
      this.information2.push(this.information[name]);
    })

    //let laudo: Laudo = {} 
    

    const documentDefinition = { 
      pageMargins: [40, 100, 40, 40],
      header: [
        
        {
          
          columns: [
            {
              width: '*',
              text: 'Clinica de Homologação',
              style: 'header',
              alignment: 'center',
              
              
            },
            
          ]
          
        },
        {
          columns: [
            {
              width: '*',
              text: 'Laudo Radiográfco',
              style: 'header',
              margin: [ 0, 10, 0, 0 ],
              
              
            }
          ]
          
        },
        {
          image: 'data:image/png;base64,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',
     width: 100,
     height: 100,
     absolutePosition: {x:450, y:10}
       },
        {
          columns: [
            {
             
              width: 'auto',
              text: 'Paciente:',
              margin: [ 80, 10, 0, 0 ],
              bold: true
            },
            {
            
              width: '*',
              text: 'Teste iLaudo novo',
              margin: [ -5, 10, 0, 0 ],
            },
            {
              
              width: 'auto',
              text: ' OS:',
              margin: [ -50, 10, 0, 0 ],
              bold: true
            },
            {
             
              width: '*',
              text: ''
            }
          ],
          
          columnGap: 10
        },
        {
          columns: [
            {
             
              width: 'auto',
              text: 'Nasc. [idade]:',
              margin: [ 80, 0, 0, 0 ],
              bold: true
            },
            {
           
              width: '*',
              text: '01/01/2000 [20a. 11m] ',
              margin: [ -5, 0, 0, 0 ],
            },
            {
              // auto-sized columns have their widths based on their content
              width: 'auto',
              text: 'Sexo:',
              margin: [ -62, 0, 0, 0 ],
              bold: true
            },
            {
              // star-sized columns fill the remaining space
              // if there's more than one star-column, available width is divided equally
              width: '*',
              text: 'Masculino',
              margin: [ -5, 0, 0, 0 ],
            }
          ],
          // optional space between columns
          columnGap: 10
        },
        {
          columns: [
            {
              // auto-sized columns have their widths based on their content
              width: 'auto',
              text: 'Doutor(a):',
              margin: [ 80, 0, 0, 0 ],
              bold: true
            },
            {
              // star-sized columns fill the remaining space
              // if there's more than one star-column, available width is divided equally
              width: '*',
              text: 'Teste',
              margin: [ -5, 0, 0, 0 ],
            },
            {
              // auto-sized columns have their widths based on their content
              width: 'auto',
              text: 'Data: ',
              margin: [ -43, 0, 0, 0 ],
              bold: true
            },
            {
              // star-sized columns fill the remaining space
              // if there's more than one star-column, available width is divided equally
              width: '*',
              text: '02/12/2020',
              margin: [ -5, 0, 0, 0 ]
            }
          ],
          // optional space between columns
          columnGap: 10
        },
      
      
      ],
 
      footer: [
        
        {
         
          image: 'data:image/png;base64,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',
          width: 150,
          height: 100,
          alignment: 'center',
          margin: [ 0, -100, 0, 0 ]
        },
        { text: 'homologação.radio.memory.com.br', alignment: 'center' }
      ],

     

      content: [

      
        
      {
        // if you specify both width and height - image will be stretched
        image: 'data:image/jpeg;base64,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',
        width: 515,
        height: 200,
        alignment: 'center',
        margin: [ 0, 20, 0, 20 ]
      },

      {
        style: 'tableExample',
        margin: [ 0, 10, 0, 18 ],
        table: {
          widths: ['*',300, '*'],
      
          headerRows: 1,
          body: [
            [{text: 'Indice', style: 'tableHeader', alignment: 'center',bold: true, color: 'gray',}, {text: 'Descricao', style: 'tableHeader', alignment: 'center', color: 'gray',bold: true},{text: 'Medida', style: 'tableHeader', alignment: 'center', color: 'gray',bold: true}],
          ]
        },
        layout: {
          hLineWidth: function (i, node) {
            return (i === 0 || i === node.table.body.length) ? 1 : 1;
          },
          vLineWidth: function (i, node) {
            return (i === 0 || i === node.table.widths.length) ? 1 : 1;
          },
          hLineColor: function (i, node) {
            return (i === 1 || i === node.table.body.length) ? 'gray' : 'white';
          },
          vLineColor: function (i, node) {
            return (i === 0 || i === node.table.widths.length) ? 'white' : 'white';
          },
        }
      },

        {
          style: 'tableExample',
          color: '#444',
          table: {
              widths: ['*',300, '*'],
              headerRows: 1,
              // keepWithHeaderRows: 1,
              
              body: [   

                  [{text:1, bold: true}, {text: this.nome,bold: true}, ''],
                  [{text:2, bold: true},{text: 'Raiz/coroa fraturada  ',bold: true}, ''],
                  [{colSpan: 3, text: 'Reabsorção alveolar vertical (irregular) ',bold: true}, '', ''],
                  ['',{text: 'Bifurcação radicular',bold: true}, '140.21 mm'],
                  ['',{text: 'Condensação óssea',bold: true}, {text:'140.21 mm',bold: true}],
                  ['',{text: 'Hipoplasia de esmalte/dentina',bold: true},{text: '140.21 mm',bold: true}],
              ]
          },
          layout: {
            
            hLineWidth: function (i, node) {
              return (i === 0 || i === node.table.body.length) ? 1 : 1;
            },
            vLineWidth: function (i, node) {
              return (i === 0 || i === node.table.widths.length) ? 1 : 1;
            },
            hLineColor: function (i, node) {
              return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
            },
            vLineColor: function (i, node) {
              return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
            },
           
          }
      },
      
       
      ],
    
      styles: {
        header: {
          fontSize: 12,
          bold: true,
          alignment: 'center'
        },
        anotherStyle: {
          italics: true,
          alignment: 'right'
        },
      }
     };
    pdfMake.createPdf(documentDefinition).open();
   }
   



}
