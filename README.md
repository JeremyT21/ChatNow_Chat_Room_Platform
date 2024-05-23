# Web Chat Server
> Course: CSCI 2020U: Software Systems Development and Integration

## Project Information
This project was created, developed, and worked on by Jeremy Thummel, Owen Tustin-Fuchs, Seth Cumby, and Trevor Lee.
<br>
<br>
Our project ChatNow is a web application providing an online chat room experience, where users can create and join rooms to talk to whomever they want. ChatNow is built with Maven, and utilizes fetching transformed JSON data from Java, and implementing said data into the user interface via Jakarta EE's WebSocket objects. A video displaying the multi-chatting functionality can be found under the filename project.mp4 in the path “src/main/webapp/img”. It has been embedded in this file for ease of access.

https://github.com/OntarioTech-CS-program/w24-csci2020u-assignment02-cumby-lee-thummel-tustinfuchs/assets/114171041/4debfed9-424b-43b5-9c44-708cb631987e

<video controls>
    <source src="src/main/webapp/img/project.mp4">
    The current browser does not support the video.
</video>

## **Improvements (html/interactions)**
UI - Different themes allow the user to customize their experience. Not only is there a fun Space theme, but the user can also enter the hex color code of the color they want to change their ChatNow background color to. There are pleasant and creative profile pictures assigned to users to help bring personality to ChatNow. A send button provides an extra method for the user to partake in sending a message, which is important since it is ChatNow’s main purpose. Hover styles also provide an extra layer of visual appeal.

Functional - The send button also adds more functionality, and uses an innovative creation and destruction addEventListener() code block. This code makes sure messages are only sent once from the user to peers. The refresh button provides the user an extra method of error resolution, in case there are any problems loading the list of available rooms. The chat history is an innovative feature allowing users to see messages in the chat, which predate their attendance in the chat room.


## Running (how to run the application)
 Step-By-Step Guide

    1. Download the full project from the GitHub repository.
    
    2. Open the project in IntelliJ, and add the local GlassFish configuration (assuming the GlassFish plugin is installed).
    
    3. Provide the version 21 JDK for deployment, and the url “http://localhost:8080/WSChatServer-1.0-SNAPSHOT/”.
    
    4. Make sure the exploded artifact is deployed with every project build.
    
    5. Run the GlassFish local server.
    
    6. Make sure to join a room using the menu on the left and enter the name of the room you wish to join using the input field, or create a room if there isn’t one already.
    
    7. Once in a room, your first entered message will be your username for the period of time you’re in the selected room.
    
    8. Have your friends follow steps 1-7, and as long as you’re in the same room running on the same localhost you can message each other!



## Resource References
### Profile Pictures:
  - data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhAVFhUXFRAWFRUYFRAVFRAXGBUWFxcWFhcYHSggGRolGxUVITEhJSkrLi4uFyAzODMsNygtLisBCgoKDQ0NDw8PDisZFRk3LS0rKysrNzctLTcrKysrKy0tNy0rKystKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwUGBwj/xABAEAABAwIEAwYDBgUCBQUAAAABAAIDBBEFEiFBBjFhEyIyUXGBB0KRFCNScqGxQ2LB0eEz8CQ0U8LxFReCg6L/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A8NREQEREBERARXxxlxsASfILdUeA7ym38o5+52QaRrSTYC5Wxp8EldzAaOv9gt/EI4xZjQP3PqVjkqSd0ESLAYx43knpYBSo6OBvKMH11/dYnSlWF6onZ2Dkxo9mqhqB5D6BQcyqoJv2keQ+gVC9p0LGn2ChogzyUUDucYHpp+yiy4DGfBIQeuoWQOKvbKVRqKjBJW6gZh0/ste5pBsRY+S6yOpV8rY5BZ7Qf0I9CoOORbuswE84jcfhPP2K00kZabEEHyKC1ERAREQEREBERAREQEREBT8Nwt0uvJu7j/RS8KwfMA+TRuzd3evRbeWccmgADkPJXBbTwshFmDXc7lY5JyVjc+6sIQVdIrTdVsqoilksqoooiIgIiICIiAqgqiIM0U5G6yzwxzCzxrsRzChLIx9lRpsRw18Rvzbs4f18ioS7COYEZSLg7HdabFsJy9+PVu43b/hQadERAREQEREBERAW7wXCwfvJPD8rfxdT0WDBMP7R2Zw7jef8x8lvaibYcgrgpUT3UR5QuRBRVVFVQEREBERAREQEREBERAREQEREFWlS4JlDVQUEPGcLy/eRju7j8PX0WlXZU0wtYi4PMea57GcP7J12+B3Lp0Qa5ERAREQFmpKcyPDG8z+nVYV0mA0uRhkPidoOg/ygnFrYmBjeQ/U7kqG4q+Z9ysaooAqoigIiICIqEoKqhKxvkUaWpA3REouTtFq31vRWCoeeQP6lVW37RVD1qHTvHMEeoIWSKs81EbVVWCGW4ussEgffLyBtfY+iKuVFkyLG+Vg0zD90FUQEEXBuiAiIgua6yldm2VhY7kf0OxUNZYJLFBzVTAWOLSNQf9lYl0XEFLmaJW8xo7081zqAiIgkUFP2kjWeZ19N11dS4AWHIaALV8NQWD5CP5W/uVLnfdBiKoqogIiICIiChKwySLJKdFqqqQk5RvtuSgT1JJsP/K67hr4cT1AElQ7sYzrYi8jh0G3uup4H4HZSsbU1TQ6YgFjDqIgfMbu/ZdHWVxO6CBh3CWHU3KASOHzSXeb+h0H0W1ZVRs0ZExo6NaFp3ykqsbSUG9E0cmj4mO9WtK12M8H4TJE6WeJsAAJMkZyG/wCUaE9LLFU1jIGgvuXONmMGr5XHk1o3WOcvjLZaksNRlLoYXO+4oWDnNKd7buPoEHnmK8C1MZtC18gLXSCIj7+OH5ZJmDRl9m81poqhrBlA1HPax3uvTpMZqJG/Z6EyA1BvJUhv/FYgdATE3+FCOQe6wA5KNxH8L20dE6rlqWMmbYmNzgWH+UPOrpD0GqQefMu/mHO6Dus+p1KqZ3C4aGNA5nmG+vXosT6onQ3A5WHjd06BZoo+RdbTk0eFvXqVQpWnKb+ZI0sT1KuVz3K1QEREBLoiCdTWcC08iCCuTrIOze5h2J+my6SnfZQeJafwyDfun12VGiRVRQdZRR5IWN3IuffVYHFTao20G2igoCIiAiqAhkaObh9QgNaquAG4Huo807SR3iW63DSb3622WaJ9ON2e/P8AVEYJ5mW8Y+oXa/B3hqKeZ1XM+MiM5Yoy5t3vt4sp52XDz1YzONyWjkWZRb1vzXX4fieHTMji+xuL2NHeMldK+/zOayKwbr1VV6xilK4k6LSvw5x2XFYnij4Is0WIVzWtIIi+yzRsDb6tbJK55B6uuFtYMeoJIQ8YtibSPG7sQ8An5SWsyj6qDoo8JcdirK5vYlsbGGSd/wDpxDn+d5+Rg3cVwlRxJG+QRR1ks9yQ19RJJRtj05ufHKNP/ilbi0NG1t4hPO9ljURYpVPLiOWcRkWAvo0oOzxN0eGN7acievlGWNmvcvoGxt5tZfTzcVrcIwaoqpXNdaWfM182fWCmPNpqLaSSD5YBo3QnzXK8C4PW4hJK+F/3zQ3/AIuWaUmDQ2jYCSS43OpvYLFi9RNEwYZBJLNIJDndHPmgc918zcoY3M69yS4m3PZB33E3GNLgzHQUThU10gAlncQ8tO2cjTS+kbbALzOljrXVcT5w+edzxM2Fz3ufm0LXPYPCOWmmmmgUrhnhyZpbK37rSRrqqWF74Kd4Ohiey4Lv5yLDYr1PhoQ4dFmdSm0mr6+N/wBqZMTzc94Gdg35WHmg80484UrKMNrapzHPqHuMgYABC46humn0/VczDPdfQvF1A2voJmNIeHRmSNwsQS0ZmkFfNlCTyVg2wVVYwq9QEREBERBVnNZsQjzwOG4730WAKbTG4IO4IQcai2f/AKW78J+qIN1VO1UdXPKtQEREGGSEk38Q/De1v6FZGPaP4RHsD+yuurg9EXx1TOo9nf2VXup36uLb+d7H6rHIwOFiSPQkLB9itpfMPJ2a/wChVEmlpo5JGQslBzENs7ssoB83utYe6mPY6m7SCKakdNmYWugDu0t87Yqltgw6G7T56eS1eFUMT6mGOSAua57WljJA0vubWDnaAr0nHPh9G9oighxGBo+V8cE8ehuDmY/OPa/oivPYeJXnWQF74y4tdJUTuNifDleXNcfYLJ/7gYkXucyoyOkaxjskcLMwae7yaBcXtfmsuLcEzRuZFC2WSS2bL2UzXOANi4MLNGi+7ioeG8PZ4numZLE1jnCSo7KSSOEtt3CIzz11JGllBLtip7WR4kdeRgkdlhkJkeAGtBN7uIsAAtI/DpO1McuWEsJa5zwWta4XdlcWg94qj25MohqS4h7yABJHlsbNfqbAkXPRYaWomJcxspGfMCC+weXWBvfS501QXvxGRzGwlzMjCcrgxgcAeffAzEdCVv4uEZ4om1Erj2LmkkwPie+Jp3lbmGUEevVZsE4ErHxmeOmEupawiWlc24JBcY33zt8uXmseIUtTh7mxSBxEmbPEaeC1jzyg5hz9EG+w7H8QjAyYw6JtssUdTEWMfHoGlrix0YuPopHCvEtZR1E57Bs8csjO3dnYYmaXJa+O0TSQfIdVwtbVxOZI1zqjMdY2gxMhaeVnwgWby+U+ym8PQSHLkxOCmLLWc6aVt2nvcmNINtdCg9ifiUdJeopopo4n6yU0kbjTyA83QyszMjd0vlPTmvEZ2xvmkdEbsMj3NvzsSSLj3U5xmDnMFXHKxsxcH55jDOQQTmZoMptzLQOeq18tSJ5Hvfa5cSQzso2i5+UaadLqwSA1EFZEABmI9db+4V92kXBBHqEFiIUUBERAWencsCuYUE3KqqP2yqoIxRZJWrEqKoiICIiBdHORUKCBJUujkZIObHNcPVpB/ovpSr4jvBDJCO1lnY0wsB8RIFy4/KwX1K+a62LRemfC7imOCkmic3NVAxspwSSXhxs1g52a1xLiAg7igpJXyOpWSl08ga6vqxp2LD4YIvwki4A2F3HU68FxzxFTsrPs9E9sdKzso6gizo3vjPdfkFy/JfX8RAveyt4ogr6d/wBmNRcT53iFj3RzzFxF3yhguS45gBmsGjW1lyNZhzmzCOPsXSyObkjY3uMtfNqTqwW8W9ieWpCNXtbW1RZSRnNI8Rwxgd+UakySu5ZnHU+XoF23Dnw9r2PmpAKQF0cbp5HjtXU+4izDQZ7HlrbXRZMJ4FEFMa6Osmjme5sdLkyA1Bd3SfNrXG5BHJoutzUYD9ijzVlXTve65c7JVSzzPI55DNlf5Xy2sEFsXBMcLhLWUdPI++jaergp4m6C/dysOvkXO9Vo8Xq8JkkaympHUwDy2eqbNnljtzbC0S96/wCLX0Kk4Bw47EM0lQxkNIT3GRwwwy1NuTnuaCQ331W5yUNLJ2dFRxy1AsC93eEPWSR17flGqDmMUHD80jIoo5omDvSVLxUukmI1LI2G93nzNuegKz4TwzgczjJJUmla4FsMRkcZQdpZC9tgf5Bp5rraCnDH9tK4Sz/jsA2PzETOTR+p81uIKrORcA+oB/dB5vWy1FMXMjx9ujXuicOzMUrWi/Zutqx/Qgg7LzhwklfcuaXkk37gza3vpz1XrXxm4kY2JlDG1md5D5SGtuxuw05ErzakcNDYX9FRkZK/lLTg9Whv7LDUwh40ht5Hui3tuFLMqsL0RYxmVoFgPO3K6qiKKIiICBFkibdBblRSuzRBbWDVQwFsJjma1w3AP1UEoQREQEREBERBTJdVo6yaknZUwkB8erSddTpa2+iywtUDEXl7i3UNbz6kjkEG/ZxAaiZ03flqpWhr3kHQHQtbbQNOgsNgBuSuh4G4YdJK98jszpBeZ/8A04L6RtPnIRboxvULz6lfJB95Hdr3Xa23kRYk+xIXq/APHlCIBTTfcTE3e93gmdoL5h4bCwA2AQb/AIjp6iWohfFNHHHEx4ALS5zHusMzG+G4bcAnlfkuTklpHSPL3kxA2e9xMlRXyN+QAa9kD8oFiegXdywh4zMIc07ggg+4WrpcEihv2ULGdWtAJ90GrqKmpqhY3poOWUG08g2BI0jFthr6LNTRsibkiaGtGw/UnzPVbJ1I47KpoQ0ZnuDWjmXEAD6qCFFGXFU4ix6LDoDI+xkOkce7j5nyaFouIviJTUwLKW00uve/hsPr8y8rrq2aqlMszy5x3Ow8h5BXBSoqpKiZ00jsz3uLievl6BT4WrFBDZSgFQVURQEREBERAUukaogCmh2VjnHZpKIx/bG+aLlu3d5oiukwWXPBa+rSR7bK2QarXcPVGWTKTo8W9xyW3qo7FVEZVVFVRRUVVQBBVERAlnyDTmb2/uegUaki7Q5j4dfV53+v+FIkaHCxQzACw5IjLUPutRV09+SkTVQUWWsCqr6DFKqn1hnkZ0a4gfTkt5B8ScSaLGcO/MxhP7LmHVCxF6DrKn4j4k/+OG/lY0H9loq7EqmoN5ppH/mc4j6clr85WVk9kGeGk81OihAUJlWFKiqAURKa1XLE16yAqKqiIgIiICIiC+IKmOS5Icu7jb2GpUiljWk4hqc0uXZunvuiNYiKiKuY4ggjmDcLr45RLG143GvQ7rj1t+H63K4xu8LuXR3+UE5wVFIqIrKOgIiICsc9WyyWWvqKryQSJqkBQzO55DWgknQAAkn0AXQcJ8FT1xzu+7h3kI8XRg39V6ng+C0lC20MYLt5HWLz77egQeaYP8OK2cB8gbC07yHvH0aNfquvovhpQxWM0kkp3Fwxv0Gv6roKjEid1BkqiVBIhwTDovDRxX83NzH/APV1Ojngbo2GIejGf2WjMx80Mio3kksDvFBEfVjP7KBPgeHS+Oji9QMp+rVBMqqJigg13w0opLmGWSI7AkPb+utvdchjHw7rYAXMAmYN4z3rdWnVehsqiFOpsRI3UHgzZ3NNnAgjQg6EeoU2GpuvZ8ZwKkrm2mjDX7SssHj18/deWcV8F1FCc4+8h2kaPD0eNiqIzXq5aumqvNT2PuiMyKgKqiiqwKilU0d0FZ5hFGX72sOp2XIudc3J1OpW0x+tzvyNPdb+rtytUgoiIgqgKKiDq8LqxNHY+Nuh6+RVksdlztJUujcHN5j9ehXVRTMmZnb7j8JVEQrDJIs8zbLWVk1lBiq6jYLvOA+Ag8NqqwWZzjiOhf1f06LB8NOEhKftlS28TT9208pXDf8AKF6HiFbdBfV19hlbYAaADQAeVlqZpyVjlkusJKC5zlaSqIoglkRAREQVuqterUQS4qgjdbWkrQQWvAc06EHUELQArNFKqrlOOuA+yDqmjBMXN8fMxdW+bf2XE0lRsV7zh9bseR0I2PqvN/iTwj9nd9qp2/cvPfaP4Tz/ANpQaCNyyrW0U11s4WXVF8MdymK1nYsyjxuGn8o81mqJmwszu57DzK5apqHSOLnHU/7soMV1REQEREFVRVVEBSqCsdE7MPcbOCiog6t8rZGZ2H1G46FReG8CdXVjYRfLze78DBzK0lPUOYbtP9j6r234HCjdBNlkb9re45mE2cGDw5L8xvoqNzWFsTGxRjKxgDWjyAWjmkO66LGaFwJ0XPTREc1BGJRXFqtUQVQqIgqUCoiAiIgIiICqCqK4NQZoH2K3lOxk8boZBmY9pa4dCtJDESujwWgcSNFVeEY7gz6KrfA7Y3afxsPhP+/JTWztiZnd7Ddx6L0L45fY2xwHtGmrYbZBqezI+e3h15XXjFRO55u43/p6IMlbVuldmcfQbNHko6oiAiIgIiIKqiqqICIiAs1NUvje2SN5a9pBa5pILT5ghYUQeu8KfFkOAhxFt+QFQ0a//Y3f1C752HxzsEsD2SMIuHMII/RfMi2eB4/U0b89PM6M7gHuu/M06FB7fVYY5uy18lMRstbgXxfjeAyvp7H/AKsQ09Swn9iu0w6poawXpqmN555b5Xj1adUHLujVhC6ypwBw+VayfCnDZBplRTZaYhR3MUGJVAV4jUmKmJ2QRA1XCNbaHC3HZbOmwEn5VRzkdPfZT6bDHO2WyxGuoKMXqaqNp/ADmefRjdVxWOfGBjAWUFP07WUD6hgP7lB3gooadhlqJGRMHNzjYe3mfRef8WfFmwMOHNLRqDO4DMesbdvUrzfGscqKt5kqJnSHa57rejW8gtcgvqJ3PcXvcXOcSXOJJLj5klY0RAREQEREBERAREQEREBERAREQVUvCP8AWj/O1EQfUnC//Kx/lV9aqog5qv5rTSIiCka3VBsiIOkoFh4w/wCWk9FVEHyxXf6j/wA7/wBysIREFEREBERAREQEREBERB//2Q==

  - data:image/jpeg;base64,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

  - https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRoCqv75eWGO6KLgBvUy6h-zm0St7mBLJ8g&s

  - data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEU8qlkRYDoAAAANNRoRYjs+sFw9rVsNNxs+sV0NWzgRXjkOTi8QWDUMQigMRCkKOiMGIRQILRsNSi0PVDMJNSALLRYHJhc5olUFGQ8EFQ0bTCgDDQYtgEMJJhMFHhILPCQ1l08nbjoxikgDDwkGIxYqeD8eVCwmazgMMBcWPiEzkEsJMR4KKRQZRyUhXjEccUEfWC4lf0cZbD+oCvnmAAARcklEQVR4nO1dCXfiug6GkI2wlLVAKdCBLrSlvX3z/3/cy0Is2Zad4DhA56Bz7p3TAEm+WLtkpdG40Y1udKMb3ehGN7rRjW50oxvd6EY3utGNbnSjG92oVvJ93/O8+P+XvpFayPfDxvbl++f15+3loxH+cyB97+l75QDt/8y8fwmk7z0eHJEenrxL35c1CrdrCV9CP41/Yxn92ReJL6bF078A0ftQ4Uto+/s5NXzRAfwHIIZveoCO88sZNfxTBNBxZpe+ySrkPUp4lsulcOQ9vPRtmpP/JKBb7YOE9gPu8OPv5VN/zuGbBq2glVAMEmPc/VqE3jcGuAoyeBkFU/TRyy+FyPHoco/xJYQgLn+pJIbIlVm2RICtADni21+5iNwSygBjiAv28cOvNPveAwCUWDRFuIcv/Mo1nMH9D2IlGmQ6NPtHWkTs2GSJgOvPBfjgzSxjSPvDarVez+fr9Wp12CcgY5ggiUyb+p7/9PL2+vD+/vD69vLhh9eLMgQeXMxFNyY+NjjEGNmfr6kg+uHszzv/venb07XmAmZOIe1WDPnUS/Bt36mvTR+vEqO/LUaIyWt4T3vVh6uPK9S1fmHUxFNBmPV9dRD9kGQ4Nc0Kvr+/spSO99TS37BEg6IvLGZXBNH3TmTRUrS+NCwgf7Yqvl8DCq7FP9fn1krScrGQbeif61A3ROIivuH7TafbdDNqj0d3zxpwg2mQUWs64GFeRUaHAPjc68a4mozcFOq4RyoXSAQkjmsrOGCMr1ewiJKhn/eaGB2i+HCfSPYf+DAkCPB3Lr+IvuCrrTsKeDnI7kSCuBYiLRwp/7m4xfC4CtNupIN3BBltRIg7IVwOIJ81vbQ69bj87512/ZBYSuu4F2Jl+OTciCBUzf7meHRcCl+KsX0vQJzyiwii+HFWNvVnj99xpPr+8P3y5CcBjvcD97iMSgNM5LEjWL+DIvN41uSxz9mFr8c4fEV/t8vjy1j1UwMR2PScmVUxYx9HOK8mLMowdtQQA3b0nMrU/3bUNDwZYKJVees4DS6MECcLJToK4dFNKwvR5Tl1emku1VQG71JQbne0mUwmd/1OVBKl2+NOk2dZL6VpGjslwvR226jwtJiMS62lO+LOk5t+8GrOWjBOWyzWXw9fU0egSYpF0P/LTRn74Y653xyLcfAsz4gvodjTT+x96D+9cXFC25VWI6Vht4QXx0FcBLwYri7ltfl+iGzHfYLDvZMR5gJ6AsRVwDHpBVNuOGrqpDfapxBmn50CMQkXobxxySocSN38aClIRTQpI4uc7b+SEhUuhuYhU6pLl4sFvt1yrgC3/gsUPJ09xve9tFYUA0T+zS7HEIe34ygx+NFoyD7tlQuosBBfrlTsN97ieHfx8BSGKKZwUNTr5lDj2CFLPS3L4Et+IoZTKc3Pu4TeNr/wN/bf1qqkzDheyGHpiIOU4vPmMDxFQ15XfdMnuKjNZpc49znxKYtn5eSsBAkuasor52VSGuC9LYAxRCmdetZUovdK4ctNoR2E0UWXkC5hL5oWEUp8ek58nP0DWlsFGEPk+v5ezreEsZ1/lOtCjvN5gqYsR9hBPYRJ1vI8+La0DPZJfCdZCOnHKKuxdNat78dZ3VttfG/2tiDxgbPGwetuhsNJxxSj25Yu8/5YZweR730oN06w5BO+wejoe81Pzy0ez0AFmX/qwuiHxMYeRGPp9pBbUqJEQxPJLo+1RPrhtqBbQpJDzu8y5FQ6U+C82+/L8IraXWR/zeUFtm0EUTL7Odlukira90IgFJ/+wHARP+mrOX9scqrvaxSMCqEkQSUyNBRRMUZKP/Yg+rO56iqYeDmUBejZcBHpfX02Ico1Jpr4NXJlr8dQEumcXULfdiASACdtSq3yoe9Y/oJh6Ih0zV5gpkcb6kYCuOvHfpjcQOE4PJNK7QfGsSNK2UyDPa+gLRgNsXtkN3IVGXteV5KZJEOEwKaDVivgvA4LrRk+L+e9zI2mrBTPg4QYmgoiYtNdkuLf41NXLieGnJm4Z66nK7el8UUXlwAo+3XlCIWJWScYhlgRId8e04c4SGZT3hYQQYFj7Jwiw5MVvgMEsdoi8lqGuz8pncmvj0vaaVP3G8oYq2M/H5xzUEmdergRlnedxcYJQU/aRQju0fxYE0Y12SpFYY5HxcjBHTqYhODQKpciH34nbyd6q4AQGwq5ssmlieQIl0JoqGnw08y7T6Dg9m7OpiGqRhCBgYv0qQyQ1KWG1gJbRNZgA8rG2CRyaobsMcjzmUPiU8KcmFr8JlY1rIsI/EbjTDjeEUKn0ZJ+u95mRPbKULG5YXDRxBEUawUDJWiKEC+hJnhVJgsFXZvQxkLKbZVzKThvpghxYeLENsPsrmSE6rpbIUkILawhqi2VaS6QEUrhh6J0WupkwE5yT60hPty0ZnZTkkU0tvcY4VrSpaYb3UPgc8PAVUwhVSm8QaSSI4Tb+zK0h8jam96ZEGFVkELkBa/FflPT2j5qcC7Rp6W4LS6RUan6LXIpctpMFQ1qSTd1tfgQy9hSCAhTTYNaiJyWIZN64LxXEZ9u/qyNq08iwlWyTQjnakx7iHx2hmqtB27ncz2/71etDUcIYcBlMabGfrcl9mqe1OetPAlYnkOLTxyZRofIZatgxewR6CwhUWu85dKHXaCG1QarpEx7f5lHToDQXJXaIzIB7Zjr0StESFeGWhXyF1fGpWRKpNrQnivTNESsWblCCm6pIrw/J1H5gnnV0adg8Y3dUosI5Q6e78oNJz5z5i22U5qSlF1+tzC71mN58+XFEYpM2vqw0fmFhuWV2MhTM0KuUPdlBV/MpdBdcnFVgzXpm7XOPWQuLi2IXC/Gm70OEw9Y47IAhZYHe220aAvsZdlU7Ge3tsMSJWoM27UsART9mYUlgA2cEa6SJauMUNo682pLFBGbmuw8twWQaMuxtbsL74kxqVvYIapYPrcliR4EZeZlsYpEB4a2pkXhykXFZKAxQBTbY8fGDkAcX1zIJnJNO3vUF1KlOYFDiBbxEnzKVQXmAarcL63ZRMQZ5w8T+ZYcfiSvrdER3PyZc3s2fP1xylcrTCtqEoV4uuN5Ezb8CmbTv+rYtM41l55zFXlnLZ+OUcPgAX6vb8USxgn4hJ2Hcv+FLW3K90WdzX1j26VyIWSzhtghiwPOfW5O59y0b+skgELvKsyLAoNxsLnXgr9c7cLojgVPbYWmRbGPFhY3zIi9+oM6l9F1O+I+hxWe+MUSGlbfpSBtR9hY3wx7ROd2N1I0yA+mq2UNCYjLOhxxdzSk2vu5sXQwTMmiHKYQZ2JafW26J1RNit1NK4ywFl2aQWwE4pWf7WIUeqoRv2AxBL1uzx7m5Mn77wf62aunASTbwlOaoom7cLSGCZjhVr74onIXCUOo3p+Wd+e3cPjk1DF8wG9QuyyHYysLKSFEOpUxKTpW04SMkJpi7TiTjmoSshYT9yOBS5d9VDI8ZC814TZ01TXkxG/8OCTd98blG4OyUddRp99DRgdrmvXIxa73InmbyZTT5j/1TcjQvA/g+a7TPcKkp0fk/VHRuD+5z0RqiRTy0Vrs7rrpKdCiSmPLax1y4ut35a+Hd/3OuB3lUz0ZNaP2uNPfTO4FpxOKk7HFXw/73ZwR1Lt/ax/45XuPmovntNvN188Zzec79YxMVLrjO+Dq3/2rodDmiw/U8qr6xUPtAMtu7S5HkVIhKbyc+qfu+bPCl4mcQAu1/iXbhOxOUlAARHpN8waHkqTp/qZ2Eq/qf0Uyx6JrN+qV0Doa0qXS5U6o5Uv9U5R4GexnUx8/1apSTwt98k6orO1rHS5EAjxqieSdI6PJaWu5vL/rj4ucPdzs9f5ylteUC1kpYLHUknVHm2HRhJDlfDjpj7qc5VMjBM9t+lb/CKyGoGQcYuJO6rt0Y9fl7nN4//y8SGk+eL4fTjabxNc5bTak4I5P7XULKUngRFU7mOixsbnsp0Yg0uDE922trOoJY5So6WV2ifDcBjW+RS8UI6dPhrDdjqL4P/sQqRlRg21NNl+ex3qstkXtvx9xQDrb/rXfsUFul3a+ann/GuGMZhu4o+gpM1O+/2F9FVUBRi3LKFn1bMNk5MI7+/yZaxujapSZ/QAqlF9lkW0OdvnvWYDIT99Qeb7WytxH8okcVCqGkZASmlVG6LY7KA9LzBI+UoVZERRRA2cTLG0xMet/VFM3bhYVspYB5cQ9y4FwKOX0s8Au+k96kN5/Bauod2lyV5RVKVG6ZiUUTyy+KZDi0dQatom05Uy7iO6439d0xkPAlBcpUW/iKpjyXqPFt5VQTBI/5eh/xCX8/6kX0R2nGlndDQBBL4urIIRaBEHAZYisvcwjJGfqdukl1C5ifrefSojs9GyXB+qgTYsz2GpZ6ozCtn4J0VG8hP+RF/CVkgi5JVWhHMHJNwWi9sQsvY8CtGojohjhvihokohjQ0mR5k9EtYhw/6p2B5S4YLM4ICGVNUbhjdxWamy4VfgZAra7eA0Vp/dVZh80vyr/hCNC9hXgoGOdDfSNlfoFHvfVhjUcuaSeSRGqdA00UypbVpBxyHd2ovGE2UsR0dutbOgabCnukEx03bZSWSvYFDUCKXfeIlc7V0fIrVmJ/Qo2CqUePNQlHn0Vi6H6qdBriIRMbVCQDyPbi7n0Aq/qdUS8hCMXzNXAbf5VSrlCmwK7abIDiCcZm8ItBGLDQnWEaDzG3EV6YKIWw0Q50QiZEtTkgREr59oUFTD21tcQbelOHiko7r5GDFWCCGuhm8oE38qNPpLNlWgvKlsLNNtz7eJLjZtd3e8ohIgDdN1/iE2P+gh1C6+Fl7BV7/1CUVOHcy+ipqt5fP5fik3H+FxqhPAYc98UxD+1iEgMK3dGoZfcJzkLUKVLV+GyHRG+EAjRrev23aKIcCALIr+E1QfQwobuNCYFr2ugUzQKVYPiIH2ICI5nfgQs4iGwMUAJ3Sg7VSr1WFW0dd0CZKSPRn/pEYLZzLkZzW7Bc9osMCmknxJHEkl8T6tK6QgKVEjBjk3Q2EwQ2ZEF95716iEwnCvNjcKlRy4dGzKiEDLuKuqHZ5fJ7SZ4q0sM0Hw4zZGQP5O9kxKpCo3Plv6U4j6mEQuGFCLvO0dIj6epbO49MIZp7ovzKyM9QspcSMynQoj9++wIMR/dyq5uOFmW/AWl7UY6c0h7psXRYY4Qx2jZIWonafVsImLSTHDAHO7cSO13p7+VQ0Tk0hRsoEIajW2YkwEeqof3aOpeprVdNO5Ea/BphF3hdBoSHi21WdbGnvUQzP3xMujCkd6boEx+OaeNx5OPy5TexDK3UWADn/TYXQeCdKd3aRKEsrkAhEWztbDAH48I5YtDwwJANNwk0wxIkHpupE9VUk4NWNNChKBM5R8nZGcrAhojfBypAILU1zttdEbxBISwYrm54LoyXuzkukOc/BVusaPKleoQnsClcsoKZTKmM0sVGRDDoWR2x832k/7XlRA24UosV8NcvndrE3i27Co9CWFXUbLQITzFWsDDyE0nuO3WyjFoL36eTADpiArcUhJhuSSGCiEon5+ZHYxI0eS3uEFHTkdY3mvDyz2izMWDFUmENCKzuuB4xwgLrkEgBGVROLyAWEPe9/62YA9hJsZQZpR4QfQIKV0KTl/hfmnC/RHfj1X9BYigSnskQv0zJBEyx71wdDlhOqXo4qFiOy2e7ikhXKora+znBMKSeRq6hCP3ZKyruaYodMqHRMEdxggL5JDyS7GnUoAQvgkHJYQV0zTIK2VdEcwfThAWrCGVTsQ1AT1CkAdoHSIQVoKIzCFrGWAIF7rSWvZzokiKDGKBqoFEDUisPPKrIkQtwp1b5NOQZWC0f6Jssg0eBT0wqkIcTCHEmqYIIVVBRGGf3jMFywA5K8VWtgrTrosQFsQWVK4NZSO1+USkaMCDBYQ7rvnLuKUGaRp2Dc5aFMSHVDsG2WhBIYTlgrOgNBjXGKWeGPV/a31DtYacTDYAAAAASUVORK5CYII=

### Space Background:
  - https://e0.pxfuel.com/wallpapers/146/1012/desktop-wallpaper-dark-aesthetic-phone-aesthetic-simple-thumbnail.jpg
  - The top bar was made using pieces of the above image.
