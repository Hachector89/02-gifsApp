import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private apiKey: string = 'lB67FWze6gbnCPrWWD5epV5e9UUXyOhv';
  private url: string = 'https://api.giphy.com/v1/gifs';

  public resultados : Gif[] = [];

  get historial() {
    //romper referencia con []
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {

    // otra forma en una sola linea:
    // this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];
    if( localStorage.getItem('historial') ){
      this._historial = JSON.parse( localStorage.getItem('historial')! );
    }

    //resultados, lo ponemos de la otra forma para que se vea que funciona
    /*
    if( localStorage.getItem('resultados') ){
      this.resultados = JSON.parse( localStorage.getItem('resultados')! );
    }
    */
    this.resultados = JSON.parse( localStorage.getItem('resultados')! ) || [];


  }

  buscarGifs( query:string ) {

    query = query.trim().toLocaleLowerCase();

    if ( !this._historial.includes(query) ) {

      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial) );

    }

    const params = new HttpParams()
      .set( 'api_key', this.apiKey )
      .set( 'q', query)
      .set( 'limit', '12' );

    this.http.get<SearchGifsResponse>(`${this.url}/search`, { params } )
      .subscribe( ( resp ) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      } );

    


  }




}
