#include<stdio.h>

int main()
{
    int arr[6];

    printf("Enter the leemnts of array: ");
    for(int i=0; i<6;i++)
    {
        scanf("%d",&arr[i]);
    }

    printf("the elemnts of array is: ");
    for(int i=0; i<6;i++)
    {
        printf("%d  ",arr[i]);

    }

    int val,pos,flag=0;

    printf("\nEnter the value you want to remove:");
    scanf("%d",&val);

    for(int i=0;i<6;i++)
    {
        if(val==arr[i]) 
        {
            flag=1;
            pos=i;//storing the pos of element
            break;
        }
    }

    if(flag==0) printf("Element not found");

    else{
        for(int i=pos; i<6;i++){
           arr[i]=arr[i+1];
            }
            printf("updated array is: ");
                for(int i=0; i<5;i++)
                    {
                        printf("%d  ",arr[i]);

                    }
        }

    
}