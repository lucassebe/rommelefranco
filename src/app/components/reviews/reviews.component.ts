import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit {

  reviews = [
    {
      name: 'CONSTRUPAT SÃO PAULO',
      date: '05/08/2024',
      rating: 5,
      comment: 'Nossa Construtora sempre prezou pela segurança jurídica dos nossos documentos e dos vínculos com os nossos clientes e essa excelência é garantida pelo Rommel e Franco Advogados... sempre extremamente técnicos e éticos! Hoje, podemos dizer que somos bem assessorados, principalmente na área contratual!',
      image: 'construpat.jpeg' 
    },
    {
      name: 'Aluisio Silva',
      date: '05/08/2024',
      rating: 5,
      comment: 'Atendimento formidável, ambiente acolhedor e profissionais exemplares. São as melhores definições para qualificar o trabalho de profissionais da envergadura do Dr. Vladmyr e da Dra. Bianca! Gratidão por todo o suporte jurídico prestado à nossa empresa. Sucesso.',
      image: 'aluisio.png' 
    },
    {
      name: 'Denyze Moraes',
      date: '05/08/2024',
      rating: 5,
      comment: 'Tivemos uma excelente experiência quando necessitamos dos serviços profissionais desta firma de advogados. Atenciosos, comprometidos e muito qualificados, nos deram o apoio e a solução do problema que precisávamos com transparência e agilidade. Recomendo.',
      image: 'denyze.png' 
    }
    ,
    {
      name: 'Marilia Araujo',
      date: '05/08/2024',
      rating: 5,
      comment: 'Precisei entrar com um processo sobre vários móveis que não tinha recebido. Já tinha tentado de tudo e não estava conseguindo. O pessoal do escritório recebeu minha demanda, sempre atentos, solícitos e muito transparentes. Muito profissionais e éticos. Recomendo demais!',
      image: 'marilia.png' 
    },
    {
      name: 'Nauan Medeiros',
      date: '05/08/2024',
      rating: 5,
      comment: 'Excelentes profissionais de uma competência inigualável! Muito satisfeita com seus serviços.',
      image: 'nauan.jpeg' 
    },
    {
      name: 'Valéria Marques',
      date: '05/08/2024',
      rating: 5,
      comment: 'Obrigada pelo excelente atendimento! Vocês são maravilhosos.',
      image: 'valeria.png' 
    },
    {
      name: 'Matheus Chaves',
      date: '05/08/2024',
      rating: 5,
      comment: 'Excelente equipe. Espaço acolhedor e confortável',
      image: 'matheus.png' 
    },
    {
      name: 'André Fonteles',
      date: '11/08/2024',
      rating: 5,
      comment: 'Extremamente satisfeito com o atendimento e profissionalismo do escritório. Os profissionais são altamente qualificados e dedicados, sempre prontos para esclarecer diversas dúvidas e indicar as melhores soluções. Recomendo a todas as empresas do setor de construção civil!!',
      image: 'andre.jpeg' 
    },
    {
      name: 'Lucas Sebe',
      date: '12/08/2024',
      rating: 5,
      comment: 'O compromisso com a ética e a dedicação ao cliente são evidentes em cada interação. Recomendo fortemente!',
      image: 'lucas.png' 
    },
  ];
  
  reviewChunks: any[][] = [];
  
  ngOnInit(): void {
    this.chunkReviews();
  }

  chunkReviews(): void {
    const isSmallScreen = typeof window !== 'undefined' && window.innerWidth <= 600; 
    const chunkSize = isSmallScreen ? 1 : 3;
    this.reviewChunks = [];
    for (let i = 0; i < this.reviews.length; i += chunkSize) {
      this.reviewChunks.push(this.reviews.slice(i, i + chunkSize));
    }
  }
}
