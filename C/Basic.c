#include<stdio.h>

int main()
{
    struct Pokemon
    {
        int HP;
        int Attack;
        int Speed;
        char Rank;
    }mewto;//another way of declaring struct pokemon mewto

    struct Pokemon pikachu;
    struct Pokemon Charizard;
    struct Pokemon Bulbasaur;
    
    pikachu.Attack=60;
    pikachu.HP=70;
    pikachu.Rank='B';
    pikachu.Speed=60;

    Charizard.Attack=120;
    Charizard.HP=100;
    Charizard.Rank='S';
    Charizard.Speed=80;

    Bulbasaur.Attack=40;
    Bulbasaur.HP=60;
    Bulbasaur.Rank='B';
    Bulbasaur.Speed=50;

    printf("Enter the Attack of mewto:");
    scanf("%d",&mewto.Attack);
    printf("Enter the HP of mewto:");
    scanf("%d",&mewto.HP);
    printf("Enter the Rank of mewto:");
    scanf("%c",&mewto.Rank);
    printf("Enter the Speed of mewto:");
    scanf("%d",&mewto.Speed);
    
  
  printf("Pikachu\nRank:%c\nAttack:%d\nHP:%d\nSpeed:%d\n\n",pikachu.Rank,pikachu.Attack,pikachu.HP,pikachu.Speed);
  printf("Charizard\nRank:%c\nAttack:%d\nHP:%d\nSpeed:%d\n\n",Charizard.Rank,Charizard.Attack,Charizard.HP,Charizard.Speed);
  printf("Bulbasaur\nRank:%c\nAttack:%d\nHP:%d\nSpeed:%d\n\n",Bulbasaur.Rank,Bulbasaur.Attack,Bulbasaur.HP,Bulbasaur.Speed);
  printf("mewto\nRank:%c\nAttack:%d\nHP:%d\nSpeed:%d\n\n",mewto.Rank,mewto.Attack,mewto.HP,mewto.Speed);
}